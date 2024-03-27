"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ResponsiveBar } from "@nivo/bar";
import {
  InicioIcon,
  ClientesIcon,
  MapaIcon,
  EnviosIcon,
  VentasIcon,
  PedidosIcon,
  PrestamosIcon,
  FinanzasIcon,
  ReportesIcon,
  DineroIcon,
  OpenIcon,
  ConfigIcon,
  ShaperonIcon,
  SalirIcon,
  CampanaIcon,
} from "./icons/Icons";
import { MinusIcon, PlusIcon } from "lucide-react";

export function Dashboard() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex min-h-scren">
        <div className="w-[15%] bg-[#1d4db0] p-6 relative text-white min-h-full">
          <div className="mb-10 flex justify-center {`${balooBhai2.className}`}">
            <h1 className="text-[#52A5F5] text-bold"> Smart</h1>
            <h1>Water</h1>
          </div>
          <div className="space-y-2">
            <Button className="flex items-center justify-between w-full text-left bg-white ">
              <div className="flex items-center flex-grow">
                <InicioIcon />
                <span className="ml-2 flex-grow text-black">Inicio</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ClientesIcon />
                <span className="ml-2 flex-grow">Clientes</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <MapaIcon />
                <span className="ml-2 flex-grow">Mapa de Clientes</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <EnviosIcon />
                <span className="ml-2 flex-grow">
                  Monitoreo de Distribuidores
                </span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <VentasIcon />
                <span className="ml-2 flex-grow">Ventas</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left relative">
              <div className="flex items-center flex-grow">
                <PedidosIcon />
                <span className="ml-2 flex-grow">Pedidos</span>
              </div>
              <Badge
                className="absolute rounded-md text-white right-0 bg-[#367DFD]"
                variant="secondary"
              >
                1
              </Badge>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <PrestamosIcon />
                <span className="ml-2 flex-grow">Préstamos</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <FinanzasIcon />
                <span className="ml-2 flex-grow">Finanzas</span>
              </div>
              <ShaperonIcon />
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ReportesIcon />
                <span className="ml-2 flex-grow">Reportes</span>
              </div>
              <ShaperonIcon />
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ConfigIcon />
                <span className="ml-2 flex-grow">Configuración</span>
              </div>
              <ShaperonIcon />
            </Button>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex w-1/2 items-center justify-between rounded-xl bg-white text-black px-5 py-2.5">
            <SalirIcon />
            <span>Salir</span>
          </div>
        </div>
        <div className="flex-1 p-10">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <InicioIcon className="w-12 h-12" />
              <h1 className="ml-4 text-3xl font-bold">Inicio</h1>
            </div>
            <div className="relative">
              <CampanaIcon />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">!</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10 mb-8">
            <div className="border border-gray-400 p-4 rounded-3xl">
              <h2 className="text-lg font-semibold mb-2">Clientes nuevos</h2>
              <p className="text-3xl text-blue-900 my-4 font-bold">18</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md mr-2">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-400 p-4 rounded-3xl">
              <h2 className="text-lg font-semibold mb-2">Préstamos activos</h2>
              <p className="text-3xl text-blue-900 my-4 font-bold">25</p>
              <p className="text-sm text-gray-600">
                <span className="bg-red-200 text-red-800 py-0.5 px-1.5 rounded-md mr-2">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-400 p-4 rounded-3xl">
              <h2 className="text-lg font-semibold mb-2">Pedidos totales</h2>
              <p className="text-3xl font-bold text-blue-900 my-4">1,236</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md mr-2">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-400 p-4 rounded-3xl">
              <h2 className="text-lg font-semibold mb-2">Ingresos totales</h2>
              <p className="text-3xl font-bold text-blue-900 my-4">1,783 Bs</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md mr-2">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4">Acciones rápidas</h2>
          <div className="grid grid-cols-5 gap-4 mb-8">
            <div className="col-span-2 bg-white p-4 rounded-xl border border-gray-400">
              <div className="flex justify-between items-center w-full mb-3">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold mb-2">Clientes</h3>
                  <span className="text-sm text-gray-400">Vista rapida</span>
                </div>
                <OpenIcon />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src="/daniela.png"
                          alt="Daniela Ayala"
                          className="object-cover"
                        />
                      </Avatar>
                      <p className="ml-2">Daniela Ayala</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="border border-[#1A3D7D] rounded-xl px-3 py-1 whitespace-nowrap">
                      20/01/2023
                    </span>
                  </div>
                  <div className="w-1/3 flex justify-end">
                    <div className="bg-[#1A3D7D] flex items-center rounded-xl px-3 py-1">
                      <DineroIcon />
                      <span className="text-bold text-white">100 Bs.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src="/ruben.png"
                          alt="Rubén González"
                          className="object-cover"
                        />
                      </Avatar>
                      <p className="ml-2">Rubén González</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="border border-[#1A3D7D] rounded-xl px-3 py-1 whitespace-nowrap">
                      20/01/2023
                    </span>
                  </div>
                  <div className="w-1/3 flex justify-end">
                    <div className="bg-[#1A3D7D] flex items-center rounded-xl px-3 py-1">
                      <DineroIcon />
                      <span className="text-bold text-white">100 Bs.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src="/mariana.png"
                          alt="Mariana Reyes"
                          className="object-cover"
                        />
                      </Avatar>
                      <p className="ml-2">Mariana Reyes</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="border border-[#1A3D7D] rounded-xl px-3 py-1 whitespace-nowrap">
                      20/01/2023
                    </span>
                  </div>
                  <div className="w-1/3 flex justify-end">
                    <div className="bg-[#1A3D7D] flex items-center rounded-xl px-3 py-1">
                      <DineroIcon />
                      <span className="text-bold text-white">100 Bs.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src="/julio.png"
                          alt="Julio Espinoza"
                          className="object-cover"
                        />
                      </Avatar>
                      <p className="ml-2">Julio Espinoza</p>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="border border-[#1A3D7D] rounded-xl px-3 py-1 whitespace-nowrap">
                      20/01/2023
                    </span>
                  </div>
                  <div className="w-1/3 flex justify-end">
                    <div className="bg-[#1A3D7D] flex items-center rounded-xl px-3 py-1">
                      <DineroIcon />
                      <span className="text-bold text-white">100 Bs.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white p-4 rounded-xl border border-gray-400">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold mb-4">Realizar pedido</h3>
                <OpenIcon />
              </div>
              <div className="space-y-4">
                <Select>
                  <SelectTrigger id="cliente">
                    <SelectValue placeholder="Cliente" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cliente1">Cliente 1</SelectItem>
                    <SelectItem value="cliente2">Cliente 2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="producto">
                    <SelectValue placeholder="Botellón de 20 Lts" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="producto1">Producto 1</SelectItem>
                    <SelectItem value="producto2">Producto 2</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="flex items-center justify-between border-2 border-gray-300 rounded-md shadow-md min-w-[70%]">
                    <span className="px-2 ">Cantidad</span>
                    <div className="flex items-center">
                      <MinusIcon className="p-1  border-2 rounded-full border-gray-300" />
                      <div className="px-3 py-1">1</div>
                      <PlusIcon className="p-1 border-2 rounded-full border-gray-300" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-2 border-gray-300 rounded-md px-3  shadow-md min-w-[30%]">
                    <span className="px-3 ">15</span>
                    <span className="px-3 py-1 border-l-2 border-gray-300">
                      Bs
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                    Realizar pedido
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-400"></div>
          </div>
          <div className="bg-[#F0F2F5] p-4 rounded-lg">
            <BarChart className="w-full h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
