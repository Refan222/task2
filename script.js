 const descriptions={
      elegant:"Elegant Aura is a category that celebrates timeless beauty and sophistication. It features graceful pieces. all carefully selected to reflect a soft, elegant, and confident feminine energy.",
      attractive:"Attractive Aura is a vibrant category designed for women who love to express their charm and energy through fashion. curated to reflect a bold and attractive personality.",
      fitness:"The Fitness collection is designed for active, modern women who value both comfort and style. It includes sporty, breathable outfits ideal for workouts, yoga, or casual athleisure wear—helping you stay confident and energetic throughout your day.",
      aurora:"The Aurora collection captures the essence of summer elegance and relaxation. It features breezy dresses, swimwear, beach bags, and light summer outfits designed for women who seek comfort and beauty in warm weather. Perfect for beach days, summer vacations, and calm, casual moments away from formal events."
    };

    const cats   = document.querySelectorAll('#categories li');
    const cards  = document.querySelectorAll('#productGrid .card');
    const title  = document.getElementById('pageTitle');
    const desc = document.getElementById('catDesc');
    const search = document.getElementById('searchInput');

    function filter(cat){
     title.textContent = cat === 'all'
     ? 'All Products'
     : document.querySelector(`.cat li[data-cat="${cat}"]`).textContent;
      desc.textContent = descriptions[cat] || "";
      cards.forEach(card=>{
        const show = (cat==='all' || card.dataset.cat===cat);
        card.classList.toggle('hide',!show);
        if(show){card.classList.add('fade');}
      });
      search.value=""; 
    }

    cats.forEach(li=>{
      li.addEventListener('click',()=>{
        cats.forEach(c=>c.classList.remove('active'));
        li.classList.add('active');
        filter(li.dataset.cat);
      });
    }); 

    search.addEventListener('input',()=>{
      const q = search.value.toLowerCase();
      cards.forEach(card=>{
        if(card.classList.contains('hide')) return;
        const match = card.querySelector('h4').textContent.toLowerCase().includes(q);
        card.style.display = match ? "" : "none";
      });
    });

    desc.textContent="";