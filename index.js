// ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"));

// function NavBar(){return(
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></hr></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// )}

// function MainContent()
//     {
//         return(<h1>I'm learning react</h1>);
//     }

// ReactDOM.render(
//                 <div>
//                     <NavBar  />
//                     <MainContent  />
//                     </div>, document.getElementById("root"));

//     const h1 = document.createElement("h1");
//     h1.textContent = "This is an imperative way to program";
//     h1.className = "header";
//     document.getElementById("root").append(h1);

const navbar = (
                <nav>
                    <h1>
                        Felipe Medina
                    </h1>
                    <ul>
                        <li>Nav</li>
                        <li>About</li>
                        <li>contact</li>
                    </ul>
                </nav>
                )



const page = (
                <div>
                    <h1>
                        My React WebSite
                    </h1>
                    <h3>
                        Reason for use react
                    </h3>
                    <ol>
                        <li>
                            It's composable
                        </li>
                        <li>
                            It's Declarative
                        </li>
                        <li>
                            Hirable Skill
                        </li>
                        <li>
                            Mainteined by skillable people
                        </li>
                    </ol>
                </div>);

function temporaryName()
     {
         return(                <div>
            <h1>
                My React WebSite
            </h1>
            <h3>
                Reason for use react
            </h3>
            <ol>
                <li>
                    It's composable
                </li>
                <li>
                    It's Declarative
                </li>
                <li>
                    Hirable Skill
                </li>
                <li>
                    Mainteined by skillable people
                </li>
            </ol>
        </div>)
     }
                const page2 = 
                                <div>
                                    <img src="https://picsum.photos/200/300" width="40px">
                                    </img>
                                </div>
//ReactDOM.render(navbar, document.getElementById("root"));

            // document.getElementById("root").append(page)
            // document.getElementById("root").append(JSON.stringify(page))
            ReactDOM.render(temporaryName(), document.getElementById("root"));
            // console.log(page);