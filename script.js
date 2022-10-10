let card = document.getElementById("row row-cols-1 row-cols-md-2");

for (let i = 0; i < 10; i++) {
    card.innerHTML+=`   <div class="col mb-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Card ${i}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to
                additional content. This content is a little bit longer.</p>
        </div>

    </div>
</div>
`;
  }