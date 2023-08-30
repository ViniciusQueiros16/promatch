import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import EditProfile from "@layouts/components/EditProfile";
import ImageFallback from "@layouts/components/ImageFallback";
import RightHandSide from "@layouts/components/homeFeed/RightHandSide";
import { Avatar, Icon } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import React, { useContext, useEffect, useState } from "react";
import {
  BsArrowRight,
  BsEyeFill,
  BsFillPeopleFill,
  BsPencil,
  BsSearch,
} from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";

function ShowProfile() {
  const session = useContext(SessionContext);

  const [speed, setSpeed] = useState();
  const [profileModal, setEditProfileModal] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleOpen = () => {
    setEditProfileModal(true);
  };

  const handleClose = () => {
    setEditProfileModal(false);
  };

  return (
    <div className="container mx-auto mt-8 flex">
      <div className="relative mx-4 flex flex-col overflow-hidden">
        <div className="rounded-lg border bg-theme-light text-center shadow-md dark:bg-darkmode-body">
          <div className="relative">
            <ImageFallback
              className="h-50 w-full rounded-md"
              height="50"
              width="800"
              src="/images/background.jpg"
              alt="image background"
            />
            <div className="mt-auto flex items-center justify-center">
              <Avatar
                src={
                  session.user?.avatar
                    ? session.user?.avatar
                    : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
                }
                className="absolute left-8 h-32 w-32"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end pr-4">
            <Icon
              onClick={handleOpen}
              as={BsPencil}
              cursor="pointer"
              className="text-gray-500"
            />
          </div>

          <div className="mb-4 ml-14 mt-8 flex flex-col justify-center text-left">
            <h4 className="cursor-pointer decoration-purple-700 underline-offset-1 hover:underline">
              {session.user?.username}
            </h4>
            <p className="text-sm text-dark dark:text-darkmode-light">
              {session.user?.email}
            </p>
            <div className="text-sm text-gray-500 md:inline">
              <div className="font-medium">
                <div>
                  <span className="font-bold text-blue-500">
                    + 500 Connections
                  </span>
                </div>
              </div>
            </div>
          </div>
          <EditProfile open={profileModal} onClose={handleClose} />
        </div>

        <div className="mt-2 rounded-lg border bg-theme-light text-center dark:bg-darkmode-body">
          <div className="mt-4 px-4 text-left">
            <h5>Análise</h5>
            <div className="flex flex-row items-center text-sm text-gray-500">
              <Icon
                as={BsEyeFill}
                cursor="pointer"
                className="mr-2 text-sm text-gray-500"
              />
              <p>Exibido apenas a você</p>
            </div>
          </div>

          <div className="mt-2 items-center rounded-lg border bg-theme-light text-center dark:bg-darkmode-body">
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <Icon
                  as={BsFillPeopleFill}
                  cursor="pointer"
                  className="mr-2  text-gray-500"
                />
                <div>
                  <h6>45 visualizações do perfil</h6>
                  <p className="text-left text-sm ">
                    Saiba quem viu seu perfil.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon
                  as={BsSearch}
                  cursor="pointer"
                  className="mr-2  text-gray-500"
                />
                <div className="flex max-w-sm flex-col items-start">
                  <h6>11 ocorrências em resultados de pesquisa</h6>
                  <p className="text-left text-sm ">
                    Veja a frequência com que seu perfil é exibido em resultados
                    de pesquisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col  rounded-lg border bg-theme-light dark:bg-darkmode-body">
          <div className="p-4">
            <div className="text-left">
              <h5 className="mb-2">Recursos</h5>
              <div className="flex flex-row items-center text-sm text-gray-500">
                <Icon
                  as={BsEyeFill}
                  cursor="pointer"
                  className="mr-2 text-gray-500"
                />
                <p>Exibido apenas a você</p>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <Icon
                as={FaSatelliteDish}
                cursor="pointer"
                className="mr-2 text-gray-500"
              />
              <div className="flex max-w-sm flex-col items-start">
                <h6>Modo de criação</h6>
                <p className="text-left text-sm ">
                  Destaque-se, exiba conteúdos no seu perfil e tenha acesso a
                  ferramentas de criação de conteúdo.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <Icon
                as={BsFillPeopleFill}
                cursor="pointer"
                className="mr-2 text-gray-500"
              />
              <div>
                <h6>Minha rede</h6>
                <p className="text-left text-sm ">
                  Veja e gerencie suas conexões e interesses.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <div className="w-full border-t border-gray-500">
                <div className="flex items-center justify-center text-center">
                  <p className="mt-2 font-bold text-gray-500">
                    Exibir todos os 5 recursos
                  </p>
                  <Icon
                    as={BsArrowRight}
                    cursor="pointer"
                    className="ml-2 mt-2 text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RightHandSide />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <ContractorsLayoutBase>
      <ShowProfile />
    </ContractorsLayoutBase>
  );
}

export default Profile;
