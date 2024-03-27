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

export function Dashboard() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex min-h-scren">
        <div className="w-[15%] bg-[#1d4db0] p-6 relative text-white min-h-full">
          <div className="mb-10 flex justify-center">
            <h1 className="text-[#52A5F5] text-bold"> Smart</h1>
            <h1>Water</h1>
          </div>
          <div className="space-y-2">
            <Button className="flex items-center justify-between w-full text-left bg-white ">
              <div className="flex items-center flex-grow">
                <InicioIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow text-black">Inicio</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ClientesIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Clientes</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <MapaIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Mapa de Clientes</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <EnviosIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">
                  Monitoreo de Distribuidores
                </span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <VentasIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Ventas</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left relative">
              <div className="flex items-center flex-grow">
                <PedidosIcon className="flex-shrink-0" />
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
                <PrestamosIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Préstamos</span>
              </div>
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <FinanzasIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Finanzas</span>
              </div>
              <ShaperonIcon className="flex-shrink-0" />
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ReportesIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Reportes</span>
              </div>
              <ShaperonIcon className="flex-shrink-0" />
            </Button>
            <Button className="flex items-center justify-between w-full text-left">
              <div className="flex items-center flex-grow">
                <ConfigIcon className="flex-shrink-0" />
                <span className="ml-2 flex-grow">Configuración</span>
              </div>
              <ShaperonIcon className="flex-shrink-0" />
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
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="border border-gray-500 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Clientes nuevos</h2>
              <p className="text-3xl font-bold">18</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Préstamos activos</h2>
              <p className="text-3xl font-bold">25</p>
              <p className="text-sm text-gray-600">
                <span className="bg-red-200 text-red-800 py-0.5 px-1.5 rounded-md">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Pedidos totales</h2>
              <p className="text-3xl font-bold">1,236</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
            <div className="border border-gray-500 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Ingresos totales</h2>
              <p className="text-3xl font-bold">1,783 Bs</p>
              <p className="text-sm text-gray-600">
                <span className="bg-green-200 text-green-800 py-0.5 px-1.5 rounded-md">
                  +8.2%
                </span>
                En el último mes
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4">Acciones rápidas</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Clientes</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p>Daniela Ayala</p>
                  <span>20/01/2023</span>
                  <span>100 Bs.</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Rubén González</p>
                  <span>20/01/2023</span>
                  <span>100 Bs.</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Mariana Reyes</p>
                  <span>20/01/2023</span>
                  <span>100 Bs.</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Julio Espinoza</p>
                  <span>20/01/2023</span>
                  <span>100 Bs.</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Realizar pedido</h3>
              <div className="space-y-2">
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
                <div className="flex items-center">
                  <Button className="mr-2" variant="ghost">
                    -
                  </Button>
                  <Input className="w-12 text-center" value="1" />
                  <Button className="ml-2" variant="ghost">
                    +
                  </Button>
                </div>
                <Button className="bg-blue-600 rounded-3xl shadow-2xl">
                  Realizar pedido
                </Button>
              </div>
            </div>
            <div></div>
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
