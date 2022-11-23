export interface AppConfig {
	server: ServerHostMap
}

export interface ServerHostMap {
	clientes: string;
	productos: string;
	ordenes  : string;
}
