const displayProject = document.getElementById("portfolio");

const projects = [
  {
    image: "/public/PROJECT 1 IMAGE.png",
    name: "FLAVORIZ",
    technology: ["React.js", "TailwindCss"],
    github: "https://github.com/Debbie-Stack/JavaScript",
    live: "http://www.google.com",
  },

  {
    image: "/public/PROJECT 2 IMAGE.png",
    name: "BIGTRYBE",
    technology: ["React.js", "TailwindCss"],
    github: "https://github.com/Debbie-Stack/JavaScript",
    live: "http://127.0.0.1:5500/index.html",
  },

  // {
  //   image: "/public/PROJECT 1 IMAGE.png",
  //   name: "FLAVORIZ",
  //   technology: ["React.js", "TailwindCss"],
  //   github: "https://github.com/Debbie-Stack/JavaScript",
  //   live: "http://127.0.0.1:5500/index.html",
  // },
];

// Aside bar function
const slide = document.getElementById("slide");
function showMenu() {
  slide.classList.toggle("slide");
}

// Skills Display Function
const projectDisplayFunction = () => {
  projects.map((project, index) => {
    return (displayProject.innerHTML += `<div class="bg-white/30 h-auto rounded-lg backdrop-blur-lg hover:scale-105 transition">
            <div class="project-1">
              <div class="w-full h-50 overflow-hidden">
              <img src="${project.image}" class="w-100 rounded-t-lg">
              </div>
              </div>
              <div>
              <div class="p-3 font-bold text-xl text-white">
                <h1>${project.name}</h1>  
              </div>
              <div id="main-div" class="flex justify-between items-center p-3">
                <div>
                <button class="bg-purple-700 text-white py-1 px-3 rounded-full">React.Js</button> 
                <button class="bg-white text-purple-900 py-1 px-3 rounded-full">TailwindCss</button>              
              </div>
              <div>
              <button><a href=${project.github} target="_blank"><i class="fa-brands fa-github text-[30px]" style="color: rgb(177, 151, 252);"></i></a></button>
              <button><a href=${project.live}><i class="fa-regular fa-eye text-white"></i></a></button>
              </div>
              </div>
              </div>
            </div>`);
  });
};

projectDisplayFunction();
