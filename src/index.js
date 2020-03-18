class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      const self = this;
      $('.section-tab').click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => { this.onScroll(); });
      $(window).resize(() => { this.onResize(); });
    }
  
    onTabClick(event, element) {
      event.preventDefault();
      const scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop }, 600);
    }
  
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkTabContainerPosition() {
      const offset = $('.section-tabs').offset().top + $('.section-tabs').height() - this.tabContainerHeight;
      if ($(window).scrollTop() > offset) {
        $('.section-tabs-container').addClass('section-tabs-container--top');
      } else {
        $('.section-tabs-container').removeClass('section-tabs-container--top');
      }
    }
  
    findCurrentTabSelector(element) {
      let newCurrentId,
           newCurrentTab;
      const self = this;
      $('.section-tab').each(function () {
        const id = $(this).attr('href');
        const offsetTop = $(id).offset().top - self.tabContainerHeight;
        const offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.section-tab-slider').css('width', width);
      $('.section-tab-slider').css('left', left);
    }
  }
  
  new StickyNavigation();

var microsoftModal = document.getElementById("microsoft-modal");
var microsoftBox = document.getElementById("microsoft-box");
var microsoftClose = document.getElementById("microsoft-close");

microsoftBox.onclick = function() {
  microsoftModal.style.display = "block";
}

microsoftClose.onclick = function() {
  microsoftModal.style.display = "none";
}

var pivotalModal = document.getElementById("pivotal-modal");
var pivotalBox = document.getElementById("pivotal-box");
var pivotalClose = document.getElementsByClassName("close")[0];

pivotalBox.onclick = function() {
  pivotalModal.style.display = "block";
}

pivotalClose.onclick = function() {
  pivotalModal.style.display = "none";
}

var taModal = document.getElementById("ta-modal");
var taBox = document.getElementById("ta-box");
var taClose = document.getElementsByClassName("close")[0];

taBox.onclick = function() {
  taModal.style.display = "block";
}

taClose.onclick = function() {
  taModal.style.display = "none";
}

var aitModal = document.getElementById("ait-modal");
var aitBox = document.getElementById("ait-box");
var aitClose = document.getElementsByClassName("close")[0];

aitBox.onclick = function() {
  aitModal.style.display = "block";
}

aitClose.onclick = function() {
  aitModal.style.display = "none";
}

var project1Modal = document.getElementById("project1-modal");
var project1Box = document.getElementById("project1-box");
var project1Close = document.getElementsByClassName("close")[0];

project1Box.onclick = function() {
  project1Modal.style.display = "block";
}

project1Close.onclick = function() {
  project1Modal.style.display = "none";
}

var project2Modal = document.getElementById("project2-modal");
var project2Box = document.getElementById("project2-box");
var project2Close = document.getElementsByClassName("close")[0];

project2Box.onclick = function() {
  project2Modal.style.display = "block";
}

project2Close.onclick = function() {
  project2Modal.style.display = "none";
}

var project3Modal = document.getElementById("project3-modal");
var project3Box = document.getElementById("project3-box");
var project3Close = document.getElementsByClassName("close")[0];

project3Box.onclick = function() {
  project3Modal.style.display = "block";
}

project3Close.onclick = function() {
  project3Modal.style.display = "none";
}

var project4Modal = document.getElementById("project4-modal");
var project4Box = document.getElementById("project4-box");
var project4Close = document.getElementsByClassName("close")[0];

project4Box.onclick = function() {
  project4Modal.style.display = "block";
}

project4Close.onclick = function() {
  project4Modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == aitModal || event.target == taModal || event.target == pivotalModal || event.target == microsoftModal || 
    event.target == project1Modal || event.target == project2Modal || event.target == project3Modal || event.target == project4Modal) {
    aitModal.style.display = "none";
    taModal.style.display = "none";
    microsoftModal.style.display = "none";
    pivotalModal.style.display = "none";
    project1Modal.style.display = "none";
    project2Modal.style.display = "none";
    project3Modal.style.display = "none";
    project4Modal.style.display = "none";

  }
}