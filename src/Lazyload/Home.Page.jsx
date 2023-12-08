import Image from "./Image";

const HomePage = () => {
  const gallery = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1701717045133-7ad93699c29b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1701551871576-e31af6170d63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1701861970866-902d8bf5b25d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1701688992044-7c58b09effa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1683009426952-13567b4fa28b?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1701485559943-9c62773358db?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1701551883632-f2821db546d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      url: "../assets/shpetim-ujkani-5DeQF6tk5p0-unsplash.jpg",
    },
    {
      id: 11,
      url: "./yuliia-tretynychenko-SHVUqLd10SU-unsplash.jpg",
    },
  ];

  return (
    <>
      <div className="Image-conatiner">
        {gallery.map((item) => {
          return (
            <div key={item.id} className="flex mt-2 flex-col">
              {/* <img src={item.url} alt="all" className="w-[600px] h-[1500px]" /> */}
              <Image id={item.id} image={item.url} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
