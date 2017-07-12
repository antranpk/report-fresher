// var Example;
	var Example = {
    	init: function(){
    		this.scrollToTop();
        this.disableRightClick();
        this.acceptRegister();
        this.blinkText();
        this.changeValueBtn();
        this.Table.init();
     	},

      /*Srcoll to the top*/
     	scrollToTop: function(){
     		$("#top").on('click', function(){
          $("html, body").animate({scrollTop: 0}, "slow");
          return false;
        });
     	},
      disableRightClick: function(){
        $(".disable-right-click").on("contextmenu", function(e){
          return false;
        });
      },
      acceptRegister: function(){
        $("#accept").on('click', function(){
          if ($("#submitbtn").is(":disabled")) {
            $("#submitbtn").removeAttr("disabled");
          } else {
            $("#submitbtn").attr("disabled", "disabled");
          }
        });
      },
      blinkText: function(){
        $(".blink-text").on('click',function(){
          $(".blink-text p").fadeOut(500);
          $(".blink-text p").fadeIn(500);        
        });
      },
      changeValueBtn: function(){
        $(".btn-change").on('click', function(){
          var $this = $(this);
          $this.toggleClass("btn-like");
          if ($this.hasClass("btn-like")) {
            $this.text("Like");
          } else {
            $this.text("Unlike");
          }
        });
      },
     	Table: {
      	init: function(){
          this.addZebra();
      	},
      	addZebra: function(){
          $(".add-zebra-odd").on("click", function(){
            $(".table-style table tr:even").removeClass("zebra");
            $(".table-style table tr:odd").addClass("zebra");
          });
          $(".add-zebra-even").on("click", function(){
            $(".table-style table tr:odd").removeClass("zebra");
            $(".table-style table tr:even").addClass("zebra");
          });
      	}
     	}
	};
