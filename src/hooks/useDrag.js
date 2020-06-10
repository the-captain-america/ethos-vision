import { useState, useEffect, useRef } from "react";

export const useDrag = itemData => {
  const omgWhyMustItBeJsonString = JSON.stringify(itemData);
  const onDragStart = event => {
    event.dataTransfer.setData("application/json", omgWhyMustItBeJsonString);
  };

  const draggable = true;

  return { onDragStart, draggable };
};

export const useDrop = dropHandler => {
  const onDragOver = event => event.preventDefault();
  const onDrop = event => {
    event.preventDefault();

    const receivedData = event.dataTransfer.getData("application/json");
    console.log(receivedData);
    const parsedData = JSON.parse(receivedData);

    dropHandler(parsedData);
  };

  return { onDragOver, onDrop };
};
