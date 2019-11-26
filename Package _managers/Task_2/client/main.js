fetch('http://127.0.0.1:3000/')
    .then(res => res.json())
    .then((posts) => {
        posts.forEach(post => {
            const h1 = $('<h2></h2>');
            const div = $('<div></div>');
            h1.text(post.title);
            const p = $('<p></p>');
            p.text(post.body);

            div
                .append(h1)
                .append(p)
                .css('background-color', 'grey')
                .css('margin', '10px')
            $('header').append(div)
            // var $p = document.createElement('p');
            // $p.textContent = post.title;
            // document.querySelector('.section').append($p)
        })
    })