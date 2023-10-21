import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Chat_Private from "@/components/chat_component";
import {  fetch_rooms_user } from "@/services/dbService";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]";


const Home = ({rooms}) => {
  const [room, setRoom] = useState(-1);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-2">
            {rooms.map((value) => (
              <div key={value.id} className="col">
                <button key={value.id} onClick={()=>setRoom(value.id)}>
                  <h2>{value.title}</h2>
                  </button>
              </div>
            ))}
        </div>
        <div className="col">
          {room ? <Chat_Private room={room} /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  const data = await fetch_rooms_user(session.user?.email);
  
  const rooms = data.map(item => {
    const formattedItem = {
      ...item.dataValues,
      createdAt: item.dataValues.createdAt.toISOString(),
      updatedAt: item.dataValues.updatedAt.toISOString()
    };
    return formattedItem;
  });

  return {
    props: {
        rooms
    },
};
}


export default Home;
