    var stop = true;
    var hour = 0;
    var minute = 0;
    var second = 0;
    var thous = 0;

    function start() {
      document.getElementById('run').style.display = 'table';
      if (stop == true) {
        stop = false;
        cron();
      }
    }

    function stopCron() {
      document.getElementById('run').style.display = 'none';
      stop = true;
    }

    function cron() {
      if (stop == false) {
        thous++;
        if (thous > 9) {
          thous = 0;
          second++;
        }

        if (second > 59) {
          second = 0;
          minute++;
        }

        if (minute > 59) {
          minute = 0;
          hour++;
        }

        show();
        setTimeout(function() {
          cron()
        }, 100);
      }
    }

    function show() {
      var complete = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ':' + (thous < 10 ? '0' + thous : thous);
      document.getElementById("show").innerHTML = complete;

    }

    function zero() {
      document.getElementById('run').style.display = 'none';
      if (stop == false) {
        stop = true;
      }
      hour = minute = second = thous = 0;
      show();
    }
