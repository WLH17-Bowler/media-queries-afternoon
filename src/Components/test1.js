nav {
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 5px;
}
nav {
  background-color: blue;
}
.nav-square {
  height: 80%;
  width: 100px;
  background-color: black;
}
@media (max-width: 400px) {
  nav {
    background-color: pink;
  }
}
@media (max-width: 600px) {
  .nav-square {
    background-color: purple;
  }
}
@media (min-width: 300px ) and (max-width: 700px) {
  .nav-square {
    background-color: green;
  }
} 

nav {
    height: 50px;
    background-color: #343a40;
    color: white;
    padding: 16px 8px;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
  }
  
  .nav-title {
    margin-right: auto;
  }
  
  .nav-links {
    margin: 0px 3px;
    display: none;
    transition: font-size 1s;
    transition-timing-function: ease-in-out;
  }
  
  .nav-links:hover {
    font-size: 26px;
    cursor: pointer;
  }
  
  .square {
    width: 100px;
    height: 100px;
    background-color: red;
    margin-left: 100px;
    margin-top: 100px;
    animation-name: spin;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  
  .slider {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation-name: slide;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: alternate;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes slide {
    0% {
      margin-left: 0px;
    }
    50% {
      background-color: pink;
      margin-top: 75px;
    }
    100% {
      margin-left: 100px;
      margin-top: 50px;
      background-color: red;
    }
  }
  
  .dropdown {
    border-top: 1px solid black;
    background-color: #343a40;
  }
  
  .hide-animation {
    animation-name: hide;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  .show-animation {
    animation-name: show;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  @keyframes hide {
    0% {
      height: 100px;
    }
    100% {
      height: 0px;
    }
  }
  
  @keyframes show {
    0% {
      height: 0px;
    }
    100% {
      height: 100px;
    }
  }
  
  @media (min-width: 990px) {
    .fa-bars {
      display: none;
    }
    .nav-links {
      display: initial;
    }
  }