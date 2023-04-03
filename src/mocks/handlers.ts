import { rest } from "msw"
import { API_URL } from "../app/constants";

const quoteRandom = [{
  
    "quote": "That's where I saw the leprechaun...He told me to burn things.",
    "character": "Ralph Wiggum",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    "characterDirection": "Left"
    
}];

const quoteCharacter = [
  {
    "quote": "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
    "character": "Milhouse Van Houten",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
    "characterDirection": "Right"
  }
]

export const Handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    if (req.url.searchParams.get('character')) {
      return res(
        ctx.status(200),
        ctx.json(quoteCharacter)
      )
    }
    return res(
      ctx.status(200),
      ctx.json(quoteRandom)
    )
  })
]