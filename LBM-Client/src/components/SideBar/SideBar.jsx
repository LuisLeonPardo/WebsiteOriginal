import React, { useState, useMemo } from 'react';
import style from './SideBar.module.scss';
import FirstIcon from '../../../public/icons/firstIcon';
import OrdersIcon from '../../../public/icons/ordersIcon';
import Layer1Icon from '../../../public/icons/layer1Icon';
import HistoryIcon from '../../../public/icons/historyIcon';
import WalletIcon from '../../../public/icons/walletIcon';
import ExitIcon from '../../../public/icons/exitIcon';
import CollapseIcon from '../../../public/icons/collapseIcon';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedIcon, setWalletPopUp } from '../../../redux/reducer';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from 'react-router-dom';

function SideBar() {
	const dispatch = useDispatch();
	const { selectedIcon, walletPopUp } = useSelector(
		(state) => state.reducerCompleto
	);
	const [container, setContainer] = useState(style.Container);

	const [Icons, setIcons] = useState(style.IconsNone);
	const [buttonsContainer, setButtonsContainer] = useState(
		style.ButtonsContainer
	);
	const OpenWallet = (e) => {
		dispatch(setWalletPopUp(true));
		e.preventDefault();
	};
	return (
		<div className={container}>
			<div className={style.FlexContainer}>
				<div className={style.LogoContainer}>
					<img src="./icons/Logo.svg" className={style.Logo} />
					{container === style.OpenContainer ? (
						<img
							src="./icons/Logo Cherryswap.svg"
							className={style.LogoCherryswap}
						/>
					) : (
						<img
							src="./icons/Logo Cherryswap.svg"
							className={style.LogoCherryswap2}
						/>
					)}
				</div>
				<div className={buttonsContainer}>
					<div
						className={
							selectedIcon === 'FirstIcon' && Icons === style.Icons
								? style.IconSelected
								: Icons
						}
						onClick={() => dispatch(setSelectedIcon('FirstIcon'))}
					>
						<FirstIcon selected={selectedIcon === 'FirstIcon' ? true : false} />
						<p>Dashboard</p>
					</div>
					<div
						className={
							selectedIcon === 'OrdersIcon' && Icons === style.Icons
								? style.IconSelected
								: Icons
						}
						onClick={() => dispatch(setSelectedIcon('OrdersIcon'))}
					>
						<OrdersIcon
							selected={selectedIcon === 'OrdersIcon' ? true : false}
						/>
						<p>Vaults</p>
					</div>
          <Link to='./realestate'>
					<div
						className={
							selectedIcon === 'Layer1Icon' && Icons === style.Icons
								? style.IconSelected
								: Icons
						}
						onClick={() => dispatch(setSelectedIcon('Layer1Icon'))}
					>
							<Layer1Icon
								selected={selectedIcon === 'Layer1Icon' ? true : false}
							/>
							<p>Real State</p>
					</div>
						</Link>
					<div
						className={
							selectedIcon === 'HistoryIcon' && Icons === style.Icons
								? style.IconSelected
								: Icons
						}
						onClick={() => dispatch(setSelectedIcon('HistoryIcon'))}
					>
						<HistoryIcon
							selected={selectedIcon === 'HistoryIcon' ? true : false}
						/>
						<p>Governance</p>
					</div>
				</div>
				<div
					className={
						container === style.OpenContainer
							? style.BottomOpenContainer
							: style.BottomButtonsContainer
					}
				>
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
							const ready = mounted && authenticationStatus !== 'loading';
							const connected =
								ready &&
								account &&
								chain &&
								(!authenticationStatus ||
									authenticationStatus === 'authenticated');

							return (
								<div
									{...(!ready && {
										'aria-hidden': true,
										style: {
											opacity: 0,
											pointerEvents: 'none',
											userSelect: 'none',
										},
									})}
								>
									{(() => {
										if (!connected) {
											return (
												<div>
													<div
														onClick={openConnectModal}
														className={
															container === style.OpenContainer
																? style.WalletIconClosed
																: style.WalletIcon
														}
													>
														<WalletIcon />
													</div>
													<button
														onClick={openConnectModal}
														type="button"
														className={
															container === style.OpenContainer
																? style.walletButtonOpen
																: style.walletButton
														}
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
											<div>
												<div
													onClick={openAccountModal}
													className={
														container === style.OpenContainer
															? style.WalletIconClosed
															: style.WalletIcon
													}
												>
													<WalletIcon />
												</div>
												<div
													className={
														container === style.OpenContainer
															? style.ConnectedModal
															: style.ConnectedModalClosed
													}
												>
													<button
														onClick={openChainModal}
														type="button"
														className={style.chainModal}
													>
														{chain.hasIcon && (
															<div
																style={{
																	background: chain.iconBackground,
																	width: 12,
																	height: 12,
																	borderRadius: 999,
																	overflow: 'hidden',
																	marginRight: 4,
																}}
															>
																{chain.iconUrl && (
																	<img
																		alt={chain.name ?? 'Chain icon'}
																		src={chain.iconUrl}
																		style={{ width: 12, height: 12 }}
																	/>
																)}
															</div>
														)}
														{chain.name}
													</button>

													<button
														onClick={openAccountModal}
														type="button"
														className={style.balanceModal}
													>
														{account.displayName}
														{account.displayBalance
															? ` (${account.displayBalance})`
															: ''}
													</button>
												</div>
											</div>
										);
									})()}
								</div>
							);
						}}
					</ConnectButton.Custom>
					<div
						className={
							container === style.OpenContainer
								? style.twoLastButtonsOpen
								: style.twoLastButtons
						}
					>
						<div
							onClick={() =>
								container === style.Container
									? (setContainer(style.OpenContainer),
									  setIcons(style.Icons),
									  setButtonsContainer(style.OpenButtons))
									: (setContainer(style.Container),
									  setIcons(style.IconsNone),
									  setButtonsContainer(style.ButtonsContainer))
							}
							className={
								container === style.OpenContainer
									? style.collapseOpen
									: style.collapse
							}
						>
							<CollapseIcon />
							<p>Collapse</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
