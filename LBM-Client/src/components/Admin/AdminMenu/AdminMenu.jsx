import React, { useEffect } from "react";
import style from "./AdminMenu.module.scss";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";
import {
  getAdminByWallet,
  approveProject,
  deleteProject,
} from "../../../../redux/actions";
import { setAdminWallet } from "../../../../redux/reducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { address } = useAccount();
  const { isAdmin, unapprovedProjects } = useSelector(
    (state) => state.reducerCompleto
  );

  useEffect(() => {
    !isAdmin ? navigate("/") : isAdmin === true ? null : navigate("/");
  }, []);

  const reject = (id) => {
    dispatch(deleteProject(id));
  };

  const approve = (id) => {
    dispatch(approveProject(id));
  };

  console.log(unapprovedProjects);

  return (
    <div className={style.Container}>
      <div className={style.FlexContainer}>
        <div className={style.title}>
          <h1>Admin menu</h1>
          <span />
        </div>
        <div className={style.grid}>
          {unapprovedProjects
            ? unapprovedProjects.map((p) => (
                <div className={style.project}>
                  <h1>{p.name}</h1>
                  <button id={style.approve} onClick={() => approve(p._id)}>
                    Approve
                  </button>
                  <button id={style.reject} onClick={() => reject(p._id)}>
                    Reject
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
