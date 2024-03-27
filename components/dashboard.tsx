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

export function Dashboard() {
  return (
    <div className="bg-white min-h-[100vh]">
      <div className="flex min-h-[100vh]">
        <div className="w-[15%] bg-[#1d4db0] p-6 text-white min-h-full">
          <div className="mb-10 flex justify-center">
            <h1 className="text-[#52A5F5] text-bold"> Smart</h1>
            <h1>Water</h1>
          </div>
          <div className="space-y-2">
            <Button className="flex items-center justify-start w-full text-left relative">
              <HomeIcon className="text-lg" />
              Inicio
              <Badge className="absolute right-0" variant="secondary">
                1
              </Badge>
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <UsersIcon className="text-lg" />
              Clientes
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <MapIcon className="text-lg" />
              Mapa de Clientes
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <MonitorIcon className="text-lg" />
              Monitoreo de Distribuidores
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <AirVentIcon className="text-lg" />
              Ventas
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <ListOrderedIcon className="text-lg" />
              Pedidos
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <StarIcon className="text-lg" />
              Préstamos
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <CurrencyIcon className="text-lg" />
              Finanzas
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <ViewIcon className="text-lg" />
              Reportes
            </Button>
            <Button className="flex items-center justify-start w-full text-left">
              <SettingsIcon className="text-lg" />
              Configuración
            </Button>
          </div>
          <div className="absolute bottom-6">
            <LogOutIcon className="text-lg" />
          </div>
        </div>
        <div className="flex-1 p-10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Inicio</h1>
            <Avatar>
              <AvatarImage
                alt="User profile"
                src="/placeholder.svg?height=40&width=40"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="bg-[#F0F2F5] p-4 rounded-lg col-span-1">
              <h2 className="text-lg font-semibold mb-2">Clientes nuevos</h2>
              <p className="text-3xl font-bold">18</p>
              <p className="text-sm text-green-600">+8.2% En el último mes</p>
            </div>
            <div className="bg-[#F0F2F5] p-4 rounded-lg col-span-1">
              <h2 className="text-lg font-semibold mb-2">Préstamos activos</h2>
              <p className="text-3xl font-bold">25</p>
              <p className="text-sm text-red-600">-8.2% En el último mes</p>
            </div>
            <div className="bg-[#F0F2F5] p-4 rounded-lg col-span-1">
              <h2 className="text-lg font-semibold mb-2">Pedidos totales</h2>
              <p className="text-3xl font-bold">1,236</p>
              <p className="text-sm text-green-600">+8.2% En el último mes</p>
            </div>
            <div className="bg-[#F0F2F5] p-4 rounded-lg col-span-1">
              <h2 className="text-lg font-semibold mb-2">Ingresos totales</h2>
              <p className="text-3xl font-bold">1,783 Bs</p>
              <p className="text-sm text-green-600">+8.2% En el último mes</p>
            </div>
            <div className="col-span-2 bg-[#F0F2F5] p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Acciones rápidas</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
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
                    <Button>Realizar pedido</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#F0F2F5] p-4 rounded-lg">
              <BarChart className="w-full h-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlassWaterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function MonitorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function AirVentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
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
