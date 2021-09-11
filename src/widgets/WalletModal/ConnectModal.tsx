import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { Text } from '../../components/Text'

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around"}}>

    <div style={{cursor:"pointer"}}>
      <img src="/images/binance.png" alt="binance" />
      <Text style={{margin:"0.5rem 0 1rem 0"}}>Binance</Text>
    </div>

    <div style={{cursor:"pointer"}}>
      <img src="/images/polygon.png" alt="polygon" />
      <Text style={{margin:"0.5rem 0 1rem 0"}}>Polygon</Text>
    </div>

    </div>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    {/* <HelpLink */}
    {/*  href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" */}
    {/*  external */}
    {/* > */}
    {/*  <HelpIcon color="primary" mr="6px" /> */}
    {/*  Learn how to connect */}
    {/* </HelpLink> */}
  </Modal>
);

export default ConnectModal;
