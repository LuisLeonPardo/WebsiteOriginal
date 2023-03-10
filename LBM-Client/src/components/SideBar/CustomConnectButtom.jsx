import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import style from "./SideBar.module.scss";
import WalletIcon from "../../../public/icons/walletIcon";

function CustomConnectButtom({ container }) {
  return (
    <div className={style.button}>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <div className={style.button}>
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className={style.walletButtonOpen}
                      >
                        Connect Wallet
                      </button>
                    </div>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className={style.ConnectedModal}>
                    <button
                      onClick={openChainModal}
                      type="button"
                      className={style.chainModal}
                    >
                      {/* {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 12, height: 12 }}
                              />
                            )}
                          </div>
                        )} */}
                      {chain.name}
                    </button>
                    {/* 
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className={style.balanceModal}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button> */}
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}

export default CustomConnectButtom;
