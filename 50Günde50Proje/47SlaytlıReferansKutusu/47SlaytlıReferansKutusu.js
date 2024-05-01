const kutu = document.querySelector(`.kutu`)
let idx = -1

const veri = [{
    "p": "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam qui quasi eum alias asperiores autem assumendexcepturi doloribus vitae facere natus magni aut sit fugiat odit reiciendis vero quos veritatis, eaque undeoluta, consectetur at aliquam velit! Odio, qui. Doloremque autem recusandae sint quam voluptate omnis animifuga molestias quasi aspernatur alias tempore, praesentium ut, laboriosam commodi nihil expedita.Repudiandae repellendus sequi doloremque perferendis! Dolores aliquid ipsum similique soluta illo molestiasuae mollitia maxime consectetur, nulla, harum consequuntur, sed amet quas ipsam? Aut atque optio veniamofficia, pariatur modi tempora ut quas quis est adipisci impedit qui ex, omnis voluptate?",
    "img": "https://pbs.twimg.com/profile_images/1235250851876352002/zXuZlI2k_400x400.jpg",
    "h3": "Montgomery Abbs",
    "small": "Software Engineer",
}
    , {
    "p": "2oremque perferendis! Dolores aliquid ipsum similique soluta illo molestiasuae mollitia maxime consectetur, nulla, harum consequuntur, sed amet quas ipsam? Aut atque optio veniamofficia, pariatur modi tempora ut quas quis est adipisci impedit qui ex, omnis voluptate?is similique magni! Ratione itaque voluptates magnam maxime facilis corrupti architecto ut minus autem natus tenetur, odio nemo, explicabo officiis fugiat mollitia adipisci atque repudiandae fugit sint eaque! Nemo quos vero cupiditate consequatur voluptatum ullam, consequuntur architecto tenetur. Est, corporis accusamus veritatis quas consequuntur et nesciunt architecto fuga sed ea repudiandae aperiam laudantium error quaerat exercitationem aspernatur vero veniam ipsa in modi beatae sapiente numquam! Hic impedit sint velit quo eius nulla laboriosam cumque porro voluptas repellat! Hic non veritatis odio molestias debitis reiciendis quisquam atque itaque! Nostrum",
    "img": "https://picsum.photos/id/237/200/300",
    "h3": "Amet baba",
    "small": "Bulaşıkçık Engineer",
},
{
    "p": "3mnis voluptate?is similique magni! Ratione itaque voluptates magnam maxime facilis corrupti architecto ut minus autem natus tenetur, odio nemo, explicabo officiis fugiat mollitia adipisci atque repudiandae fugit sint eaque! Nemo quos vero cupiditate consequatur voluptatum ullam, consequuntur architecto tenetur. Est, corporis accusamus veritatis quas consequuntur et nesciunt architecto fuga sed ea repudiandae aperiam laudantium error quaerat exercitationem aspernatur vero veniam ipsa in modi beatae sapiente numquam! Hic impedit sint velit quo eius nulla laboriosam cumque porro voluptas repellat! Hic non veritatis odio molestias debitis reiciendis quisquam atque itaque! Nostrum",
    "img": "https://picsum.photos/id/250/200/300",
    "h3": "Amet baba",
    "small": "Balici Engineer",
}
]

setInterval(updateCont, 10000)

function updateCont() {
    idx++
    if (idx > veri.length - 1) {
        idx = 0
    }
    kutu.innerHTML =`
        <p>${veri[idx].p}</p>
        <div>
            <img src="${veri[idx].img}" alt="">
            <div>
                <h3>${veri[idx].h3}</h3>
                <small>${veri[idx].small}</small>
            </div>
        </div>
    `
}

updateCont()