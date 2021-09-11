import React from "react";
import { Flex } from "../..";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  networkName?:string;
  networkLink?:string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout,networkName, networkLink }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Flex>
          <Button
            size="sm"
            variant="primary"
            
            onClick={() => {
              window.open(networkLink)
            }}
          >
            <img style={{width:"25px", height:"25px", marginRight:"5px"}} src="/images/BNB.png" alt="network" />
            {networkName}
          </Button>
          <Button
            size="sm"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </Button>
        </Flex>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
