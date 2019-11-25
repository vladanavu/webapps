fetch('http://127.0.0.1:3000/')
    .then(res => res.json())
    .then((posts) => {
        posts.forEach(post => {
            var $div = $('<div></div>').append('body')
            h1.textContent = post.title;
            $('p').append('div');
            .text()

            // var $p = document.createElement('p');
            // $p.textContent = post.title;
            // document.querySelector('.section').append($p)
        })
    })