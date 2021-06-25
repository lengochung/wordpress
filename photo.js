let gallery = document.getElementsByClassName('gallery-icon');
        for (const key of gallery) {
           let a = key.childNodes[1];
           let img = a.childNodes[0];
         //   let namephoto = img.src.split('/')[8].split('.')[0];
         //   a.href = `https://lengochung.github.io/wordpress/${namephoto}`;
           console.log(img);
        }