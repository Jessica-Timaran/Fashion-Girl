import React from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

function OlvidarContraseña() {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 px-16 py-16 max-w-5xl mx-auto h-auto">
      <div className="hidden lg:flex lg:w-1/2 xl:w-[600px] 2xl:w-[800px] items-center justify-center">
        <img
          className=" h-auto object-contain"
          src="/img/Contraseña.png"
          alt="Imagen niño"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center py-6 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-52 w-auto"
            src="/img/logo.png"
            alt="Logo"
          />
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">
            Reestablece tu contraseña
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4">
            <div>
              <Input id="" Text="Contraseña" />
            </div>

            <div>
              <Input id="" Text="Confirmar Contraseña" />
            </div>

            <div className="flex justify-center">
              <Button Text="Restablecer" />
            </div>
          </form>

          {/* <p className="mt-8 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{' '}
            <a href="#" className="font-semibold text-Cafe hover:text-Cafe2">
              ¡Registrate Aquí!
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default OlvidarContraseña;
