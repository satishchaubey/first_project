import React from "react";

export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>;
}
