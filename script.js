document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === 'ui') {
            if (item.display === true) {
                document.getElementById('uiContainer').style.display = 'block';
                document.getElementById('openSound').play();
            } else {
                document.getElementById('uiContainer').style.display = 'none';
            }
        }
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        fetch(`https://${GetParentResourceName()}/hideTankenUI`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        });
    });

    // New button event listeners
    document.getElementById('TankenButton').addEventListener('click', function() {
        fetch(`https://${GetParentResourceName()}/imlukaaufdie1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        });
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        fetch(`https://${GetParentResourceName()}/hideTankenUI`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            fetch(`https://${GetParentResourceName()}/hideTankenUI`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({})
            });
        }
    });
});
