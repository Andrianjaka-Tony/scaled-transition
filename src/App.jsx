import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [clicked, setClicked] = useState(false);

  const variant = {
    clicked: {
      scale: 0.7,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: {
        clipPath: {
          delay: 0.3,
          duration: 0.8,
          ease: [1, 0.01, 0.44, 0.97],
        },
        scale: {
          duration: 1.1,
          ease: [1, 0.01, 0.44, 0.97],
        },
      },
    },
    nonClicked: {
      scale: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
  };

  const otherVariant = {
    initial: {
      scale: 0.7,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    animate: {
      scale: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        clipPath: {
          delay: 1.1,
          duration: 0.8,
          ease: [1, 0.01, 0.44, 0.97],
        },
        scale: {
          delay: 1.2,
          duration: 0.8,
          ease: [1, 0.01, 0.44, 0.97],
        },
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-950">
      <motion.div
        variants={variant}
        initial="nonClicked"
        animate={clicked ? "clicked" : "nonClicked"}
        className="bg-white relative top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="h-full overflow-auto min-h-screen w-full">
          <div className="px-36">
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <button onClick={() => setClicked(!clicked)} className="my-16">
              Click me
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={otherVariant}
        initial="initial"
        animate={clicked ? "animate" : "initial"}
        className="bg-white absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="h-full overflow-auto min-h-screen w-full">
          <div className="px-36">
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <h1 className="mt-36 font-semibold tracking-tight text-4xl">Hello world</h1>
            <p className="font-light leading-normal mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia, facere
              repudiandae qui labore optio similique eligendi nisi distinctio, libero voluptatum
              vero corporis nesciunt id deleniti officia possimus aliquam quidem doloremque hic
              quibusdam ea! Ab, architecto! Quam sunt magnam aspernatur deserunt laborum porro,
              beatae temporibus at a incidunt quae laudantium distinctio quibusdam cumque placeat
              aperiam accusantium, delectus quidem blanditiis sapiente aut aliquid. Facilis ratione
              doloribus et, ex quibusdam in expedita.
            </p>
            <button onClick={() => setClicked(!clicked)} className="my-16">
              Click me
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
