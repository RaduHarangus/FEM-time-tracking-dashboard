let plan = 'Weekly';
const entryArray = [
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

$(document).ready(function(){
    setTitle();
    changePlan(plan.toLowerCase());
});

$('.plan-btn').on('click', function() {
    $('.plan-btn').removeClass('active');
    $(this).addClass('active');
    plan = $(this).text();
    changePlan(plan.toLowerCase());
});

function changePlan(plan) {
    let planText = '';
    if (plan === 'daily' ) planText = 'Yesterday';
    if (plan === 'weekly' ) planText = 'Last Week';
    if (plan === 'monthly' ) planText = 'Last Month';

    $('.card__content__main').each( function(index) {
        $(this).text(entryArray[index].timeframes[plan].current + 'hrs');
    });
    $('.card__content__second').each( function(index) {
        $(this).text(planText + ' - ' + entryArray[index].timeframes[plan].previous + 'hrs');
    });
}

function setTitle() {
    $('.title').each(function(index) {
        $(this).text(entryArray[index].title.substr(0,1).toUpperCase() + entryArray[index].title.substr(1));
    });
}
