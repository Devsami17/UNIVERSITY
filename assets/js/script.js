var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,

    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },


  // },
});



function openNav() {
  var resNav = document.querySelector('.res-nav');
  resNav.style.left = '0%';
  document.body.style.overflow = 'hidden'
}
function navClose() {
  var resNav = document.querySelector('.res-nav');
  resNav.style.left = '100%';
  document.body.style.overflow = 'auto'
}

var navbarData = [
  {
    title: 'store',
    first: ['Shop', 'Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories'],
    second: ['Quick Links', 'Find a Store', 'Order Status', 'Apple Trade In', 'Financing'],
    third: ['Shop Special Stores', 'Certified Refurbished', 'Education', 'Business', 'Veterans and Military', 'Government'],
  },
  {
    title: 'mac',
    first: ['Explore Mac', 'Explore All Mac', 'Macbook Pro', 'Mac', 'Macbook Air', 'Mac mini', 'Mac Pro', 'Displays'],
    second: ['Shop Mac', 'Shop Mac', 'Apple Trade In', 'Mac Accessories', 'Financing'],
    third: ['More From Mac', 'Mac Support', 'Apple Care+ for Mac', 'macOS Sonoma', 'Apps by Apple', 'iCloud+', 'Mac for Business'],
  },
  {
    title: 'iPad',
    first: ['Explore iPad', 'Explore All iPad', 'iPad Pro', 'iPad', 'iPad Air', 'iPad mini', 'Apple Pencil', 'Keyboards'],
    second: ['Shop iPad', 'Shop iPad', 'Apple Trade In', 'iPad Accessories', 'Financing'],
    third: ['More From iPad', 'iPad Support', 'Apple Care+ for iPad', 'iPadOS 17', 'Apps by Apple', 'iCloud+', 'Education'],
  },
  {
    title: 'iPhone',
    first: ['Explore iPhone', 'Explore All iPhone', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone SE'],
    second: ['Shop iPhone', 'Shop iPhone', 'Apple Trade In', 'iPhone Accessories', 'Financing'],
    third: ['More From iPhone', 'iPhone Support', 'Apple Care+ for iPhone', 'IOS 17', 'Apps by Apple', 'iCloud+', 'Education'],
  },
  {
    title: 'Watch',
    first: ['Explore Apple Watch', 'Explore All Apple Watch', 'Apple Watch Series 9', 'Apple Watch Ultra 2', 'Apple Watch SE'],
    second: ['Shop Apple Watch', 'Shop Apple Watch', 'Apple Trade In', 'Apple Watch Accessories', 'Financing'],
    third: ['More From Watch', 'Apple Watch Support', 'Apple Care+', 'WatchOs 17', 'Apps by Apple', 'iCloud+', 'Education'],
  },
  {
    title: 'Vision'
    , first: ['Explore Vision', 'Apple Vision Pro'],
    second: ['Shop Vision', 'Shop Apple Vision Pro', 'Apple Vision Pro Accessories', 'Book a Demo'],
    third: ['More From Vision', 'Apple Vision Pro Support', 'Apple Care+'],


  },
  {
    title: 'AirPods',
    first: ['Explore AirPods', 'Explore All AirPods', 'AirPods Pro 2nd gen', 'AirPods Pro 3rd gen', 'AirPods Max'],
    second: ['Shop AirPods', 'Shop AirPods', 'AirPods Accessories'],
    third: ['More From AirPods', 'AirPods Support', 'Apple Care+ for Headphones', 'Apple Music'],
  },
  {
    title: 'Tv',
    first: ['Explore Tv', 'Explore Tv & Home', 'Apple TV 4K', 'HomePod', 'HomePod mini'],
    second: ['Shop Tv', 'Shop Tv', 'Apple Trade In', 'Tv Accessories', 'Financing'],
    third: ['More From Tv', 'Tv Support', 'Apple Care+ for Tv', 'TvOS 17', 'Apps by Apple', 'iCloud+', 'Education'],
  },
  {
    title: 'Entertainment',
    first: ['Explore Entertainment', 'Explore All Entertainment', 'Apple  Pro', 'Apple One ', 'Apple Tv', 'Apple  Music', 'Apple Pencil', 'Keyboards'],
    second: ['Support', 'Apple Tv Support ', 'Apple Music Support'],
  },
  {
    title: 'Accessories',
    first: ['Shop All Accessories', 'Mac', 'iPad', 'iPhone', 'Apple TV', 'Apple Watch', 'Vision Pro'],
    second: ['Explore Accessories', 'Made By Apple ', 'AirTag'],
  },
  {
    title: 'Support',
    first: ['Explore Support', 'Mac', 'iPad', 'iPhone', 'Apple TV', 'Apple Watch', 'Vision Pro', 'AirPods'],
    second: ['Get Help', 'Community ', 'Check Coverage', 'Repair', 'Contact Us'],
    third: ['Helpful Topics', 'Get Apple Care+ ', 'Apple ID and Pass', 'Billing', 'Find My Apple', 'Accessibilites']
  },
];

var subMenu = document.querySelector('.sub-menu');
var des_links = document.querySelectorAll('.nav-links a');
var first_row = document.getElementById('first_col');
var sec_row = document.getElementById('sec_col');
var third_row = document.getElementById('third_col');
var Main = document.querySelector('main');

des_links.forEach((item) => {
  item.onmouseenter = () => {
    subMenu.style.height = '400px';
    subMenu.style.display = 'block';
    subMenu.style.opacity = '1';
    Main.style.filter = 'blur(10px)'
  };
});

subMenu.onmouseout = () => {
  subMenu.style.height = '0px';
  subMenu.style.display = 'none';
  subMenu.style.opacity = '0';
  Main.style.filter = 'blur(0px)'
};

function clearRows() {
  first_row.innerHTML = "";
  sec_row.innerHTML = "";
  third_row.innerHTML = "";
}
function updateOpacity(element) {
  element.style.opacity = '0';
  setTimeout(() => {
    element.style.opacity = '1';
  }, 400); // Delay to ensure opacity is updated after resetting to 0
}
function nav_store() {
  clearRows();
  navbarData[0].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[0].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[0].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });

}

function nav_mac() {
  clearRows();
  navbarData[1].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[1].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[1].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_ipad() {
  clearRows();
  navbarData[2].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[2].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[2].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_iphone() {
  clearRows();
  navbarData[3].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[3].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[3].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_watch() {
  clearRows();
  navbarData[4].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[4].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[4].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_vision() {
  clearRows();
  navbarData[5].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[5].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[5].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_airpods() {
  clearRows();
  navbarData[6].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[6].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[6].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_tv() {
  clearRows();
  navbarData[7].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[7].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[7].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function nav_entertainement() {
  clearRows();
  navbarData[8].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[8].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
}
function nav_accessories() {
  clearRows();
  navbarData[9].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[9].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });

}
function nav_support() {
  clearRows();
  navbarData[10].first.forEach((navs) => {
    first_row.innerHTML += "<li>" + navs + "</li>";
    updateOpacity(first_row);
  });
  navbarData[10].second.forEach((navs1) => {
    sec_row.innerHTML += "<li>" + navs1 + "</li>";
    updateOpacity(sec_row);
  });
  navbarData[10].third.forEach((navs2) => {
    third_row.innerHTML += "<li>" + navs2 + "</li>";
    updateOpacity(third_row);
  });
}
function subMenuOpens() {
  var subMenu2 = document.querySelector('.sub-menu-2');
  subMenu2.style.height = '400px';
  subMenu2.style.display = 'block';
  subMenu2.style.opacity = '1';
  Main.style.filter = 'blur(10px)'
  Main.onmouseenter = () => {
    subMenu2.style.height = '0px';
    subMenu2.style.display = 'none';
    subMenu2.style.opacity = '0';
    Main.style.filter = 'blur(0px)'
  };
}
var searchicon = document.querySelector('.sub-menu-2 div:nth-child(2) i');

var recents_link = document.querySelector('.recent-search');
var searchBar = document.getElementById('search-input');
var recents = ['Apple Store', 'Apple Mac', 'Apple iPhone', 'Apple iPad', 'Tv', 'MacBook', 'Vision', 'Accessories', 'AirPods', 'Support', 'Products', 'My Cart', 'Find My iPhone'];

function searchIcon() {
  subMenuOpens();

  searchBar.addEventListener("input", () => {
    var searchValue = searchBar.value.trim().toLowerCase();
    if (searchValue.length === 0) {
      recents_link.innerHTML = " ";
      ShowRecentWithoutFilter();
    } else {

      var filterRes = recents.filter((item) => item.toLowerCase().includes(searchValue));

      recents_link.innerHTML = "";
      filterRes.forEach((res) => {
        recents_link.innerHTML += `<li><i class='bx bx-right-arrow-alt'></i>${res}</li>`;
      });
    }
  });

  recents_link.innerHTML = " ";
  ShowRecentWithoutFilter();
}

function ShowRecentWithoutFilter() {
  for (let a = 0; a < 4; a++) {
    recents_link.innerHTML += `<li><i class='bx bx-right-arrow-alt'></i>${recents[a]}</li>`;
  }
}

// Call the searchIcon function to set up the event listener
searchIcon();
function rubSearch() {
  var searchBar = document.getElementById('search-input');
  searchBar.value = "";
  recents_link.innerHTML = " "
  ShowRecentWithoutFilter();
  searchBar.placeholder = 'Search apple.com';
}
var subMenu3 = document.getElementById('sub-menu-3')
function cartIcon(){
  subMenu3.style.height = '400px';
  subMenu3.style.display = 'block';
  subMenu3.style.opacity = '1';
  Main.style.filter = 'blur(10px)'
  Main.onmouseenter = () => {
    subMenu3.style.height = '0px';
    subMenu3.style.display = 'none';
    subMenu3.style.opacity = '0';
    Main.style.filter = 'blur(0px)'
  };

}

window.addEventListener('offline',()=>{
window.location.href = 'offline.html'

})