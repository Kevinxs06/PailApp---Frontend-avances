import React, { createContext, useContext, useState } from "react";

export interface Usuario {
  id: string;
  nombre: string;
  foto: string;
}

export interface Comentario {
  id: string;
  usuario: Usuario;
  texto: string;
  fecha: Date;
  likes: number;
  respuestas: Comentario[];
}

export interface Publicacion {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: any;
  ingredientes: string;
  tiempo: string;
  dificultad: string;
  fecha: Date;
  likes: number;
  comentarios: number;
  listaComentarios: Comentario[];
  guardado: boolean;
}

interface ForoContextProps {
  publicaciones: Publicacion[];
  agregarPublicacion: (
    data: Omit<
      Publicacion,
      "id" | "fecha" | "likes" | "comentarios" | "guardado" | "listaComentarios"
    >
  ) => void;
  toggleGuardar: (id: number) => void;
  agregarComentario: (id: number, texto: string) => void; 
}

const ForoContext = createContext<ForoContextProps | undefined>(undefined);

export const ForoProvider = ({ children }: any) => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  const agregarPublicacion = (data: any) => {
    const nueva: Publicacion = {
      id: Date.now(),
      fecha: new Date(),
      likes: 0,
      comentarios: 0,
      listaComentarios: [], 
      guardado: false,
      ...data,
    };

    setPublicaciones((prev) => [nueva, ...prev]);
  };

  const toggleGuardar = (id: number) => {
    setPublicaciones((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, guardado: !p.guardado } : p
      )
    );
  };

const agregarComentario = (
  publicacionId: number,
  texto: string,
  parentId?: string
) => {
  const usuarioMock: Usuario = {
    id: "1",
    nombre: "Kevin Páez",
    foto: "https://i.pravatar.cc/150?img=3",
  };

  setPublicaciones((prev) =>
    prev.map((pub) => {
      if (pub.id !== publicacionId) return pub;

      const nuevoComentario: Comentario = {
        id: Date.now().toString(),
        usuario: usuarioMock,
        texto,
        fecha: new Date(),
        likes: 0,
        respuestas: [],
      };

      if (!parentId) {
        return {
          ...pub,
          listaComentarios: [...pub.listaComentarios, nuevoComentario],
          comentarios: pub.comentarios + 1,
        };
      }

      const agregarRespuesta = (comentarios: Comentario[]): Comentario[] =>
        comentarios.map((c) => {
          if (c.id === parentId) {
            return {
              ...c,
              respuestas: [...c.respuestas, nuevoComentario],
            };
          }
          return {
            ...c,
            respuestas: agregarRespuesta(c.respuestas),
          };
        });

      return {
        ...pub,
        listaComentarios: agregarRespuesta(pub.listaComentarios),
        comentarios: pub.comentarios + 1,
      };
    })
  );
};

  return (
    <ForoContext.Provider
      value={{ publicaciones, agregarPublicacion, toggleGuardar, agregarComentario, }}
    >
      {children}
    </ForoContext.Provider>
  );
};

export const useForo = () => {
  const context = useContext(ForoContext);
  if (!context)
    throw new Error("useForo debe usarse dentro de ForoProvider");
  return context;
};