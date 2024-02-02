import { tools } from "$lib/tools"
import type { PageLoad } from "./$types"

export const load: PageLoad = ({params}) => {
  let title = ""
  let description = ""
  tools.forEach(x => {
    if (x.link === "/"+params.tools) {
      title = x.title
      description = x.description
    }
  })

  return {
    title: title,
    description: description
  }
}
