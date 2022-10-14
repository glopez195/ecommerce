import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const UserProfile = () => {
  const { profile } = useStateContext();

  console.log(profile);
  if (profile.gender === undefined) return;

  return (
    <div className="bg-paragraph pt-24 w-full flex justify-center items-center">
      <div className="w-[95%] bg-white rounded-md flex flex-col gap-8 pb-16">
        <div className="flex flex-col pt-8 justify-center items-center md:flex-row md:justify-around md:pl-16 md:pr-16 md:pt-16 gap-12">
          {/* Picture */}
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="p-5 ">
              <img
                className="rounded-full w-[200px] h-[200px]"
                src={profile.picture.large}
              />
            </div>
            <div className="p-5 text-white rounded-md drop-shadow-sm text-xl flex gap-5 bg-background">
              <span>Usuario: </span>
              <span>{profile.login.username}</span>
            </div>
          </div>
          {/* Details */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex  flex-col pt-5 pb-5 pl-10 pr-10 mt-3 ml-1 text-xl bg-slate-100 rounded-sm justify-between min-w-[230px] max-w-[350px] md:text-3xl md:w-[800px] md:self-start text-start">
              <div className="flex md:justify-between justify-around place-items-center">
                <span className="text-slate-500">Titulo: </span>
                <span className="text-base md:text-2xl self-end">
                  {profile.name.title}{" "}
                </span>
              </div>
              <div className="flex md:justify-between justify-around items-center">
                <span className="text-slate-500">Nombre: </span>
                <span className="text-base md:text-2xl self-end">
                  {profile.name.first}{" "}
                </span>
              </div>
              <div className="flex md:justify-between justify-around items-center">
                <span className="text-slate-500">Apellido: </span>
                <span className="text-base md:text-2xl self-end">
                  {profile.name.last}{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col p-8 mt-3 ml-1 text-xl bg-slate-200 rounded-sm text-center justify-around min-w-[230px] self-center tm-4 md:self-end md:tm-[-8em]">
              {/* Contact */}
              <span className="text-background font-semibold text-xl">
                Contacto
              </span>
              <div className="flex justify-around items-center gap-4">
                <span className="text-slate-500">Email: </span>
                <span className="text-base">{profile.email} </span>
              </div>
              <div className="flex justify-around items-center gap-4">
                <span className="text-slate-500">Teléfono Casa: </span>
                <span className="text-base">{profile.phone} </span>
              </div>
              <div className="flex justify-around items-center gap-4">
                <span className="text-slate-500">Teléfono Trabajo: </span>
                <span className="text-base">{profile.cell} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-5 gap-10 flex flex-wrap justify-around items-center text-center">
          {/* Location */}
          <div className="flex-col flex gap-5">
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">Dirección: </span>
              <span className=" text-md">
                {profile.location.street.name}, {profile.location.street.number}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">Ciudad: </span>
              <span className=" text-md">{profile.location.city}</span>
            </div>
          </div>
          <div className="flex-col flex gap-5">
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">Estado: </span>
              <span className="text-md">{profile.location.state}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">País: </span>
              <span className=" text-md">{profile.location.country}</span>
            </div>
          </div>
          <div className="flex-col flex gap-5">
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">País: </span>
              <span className=" text-md">{profile.location.country}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">Postal: </span>
              <span className=" text-md">{profile.location.postcode}</span>
            </div>
          </div>
          <div className="flex-col flex gap-5">
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">
                Fecha de Nacimiento:{" "}
              </span>
              <span className=" text-md">{profile.dob.date}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-zinc-400">Edad: </span>
              <span className=" text-md">{profile.dob.age}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-paragraph w-[100%] h-[100vh] -z-10"></div>
    </div>
  );
};

export default UserProfile;
