const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

$(".work h1").text(data[0]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek1").text("Last Week - " + data[0]['timeframes']['weekly']['previous']+"hrs");

$(".play h1").text(data[1]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek2").text("Last Week - " + data[1]['timeframes']['weekly']['previous']+"hrs");

$(".study h1").text(data[2]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek3").text("Last Week - " + data[2]['timeframes']['weekly']['previous']+"hrs");

$(".exercise h1").text(data[3]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek4").text("Last Week - " + data[3]['timeframes']['weekly']['previous']+"hrs");

$(".social h1").text(data[4]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek5").text("Last Week - " + data[4]['timeframes']['weekly']['previous']+"hrs");

$(".self-care h1").text(data[5]['timeframes']['weekly']['current'] + 'hrs');
$(".lastweek6").text("Last Week - " + data[5]['timeframes']['weekly']['previous']+"hrs");

function changer(option) {
    $(".work h1").text(data[0]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek1").text("Last Week - " + data[0]['timeframes'][option]['previous']+"hrs");

    $(".play h1").text(data[1]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek2").text("Last Week - " + data[1]['timeframes'][option]['previous']+"hrs");

    $(".study h1").text(data[2]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek3").text("Last Week - " + data[2]['timeframes'][option]['previous']+"hrs");

    $(".exercise h1").text(data[3]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek4").text("Last Week - " + data[3]['timeframes'][option]['previous']+"hrs");

    $(".social h1").text(data[4]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek5").text("Last Week - " + data[4]['timeframes'][option]['previous']+"hrs");

    $(".self-care h1").text(data[5]['timeframes'][option]['current'] + 'hrs');
    $(".lastweek6").text("Last Week - " + data[5]['timeframes'][option]['previous']+"hrs");
}


$('h4').on("click", function (event) {
    option = (event.delegateTarget.id);

    switch (option) {
        case "daily":
            $("#daily").addClass("underline");
            $("#weekly").removeClass("underline");
            $("#monthly").removeClass("underline");
            break;
        case "weekly":
            $("#daily").removeClass("underline");
            $("#weekly").addClass("underline");
            $("#monthly").removeClass("underline");
            break;
        case "monthly":
            $("#daily").removeClass("underline");
            $("#weekly").removeClass("underline");
            $("#monthly").addClass("underline");
            break;
        default:
            break;
    }

    changer(option);
})