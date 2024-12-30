import { useStrapiApp } from "@strapi/strapi/admin";
import { FC } from "react";

export const Whatever: FC = () => {
  const components = useStrapiApp('EXAMPLE', (state) => state.components)

  const MediaLibraryDialog = components['media-libary'];
  
  return <p>Whatever</p>;
}