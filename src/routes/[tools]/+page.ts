import { tools } from "../../tools"
import type { PageLoad } from "./$types"

export const load: PageLoad = ({params}) => {
  let title = ""
  let description = ""
  let component = ""
  tools.forEach(x => {
    if (x.link === "/"+params.tools) {
      title = x.title
      description = x.description
      component = x.component
    }
  })

  return {
    title: title,
    description: description,
    component: component
  }
}
