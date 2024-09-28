import { useState, useEffect } from "react";
import React from "react";

export async function getAllStarships() {
  let starships = [];
  let nextPage = "https://swapi.dev/api/starships/";

  try {
    while (nextPage) {
      const response = await fetch(nextPage);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      starships = starships.concat(data.results); // Collect all starships
      nextPage = data.next; // Get the URL for the next page, if available
    }
    return starships; // Return the complete starships array
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error for handling later
  }
}
