import { ROUTER_FUNCTION } from '@/commons/config/function.config'
import { ROUTER_MASTER } from '@/commons/config/master.config'
import { ROUTER_ROLE } from '@/commons/config/role.config'
import { ROUTER_RESOURCE } from '@/commons/config/resource.config'
import { ROUTER_USER } from '@/commons/config/user.config'
import { ROUTER_CV } from '@/commons/config/cv.config'

export default [
  ...ROUTER_USER,
  ...ROUTER_ROLE,
  ...ROUTER_FUNCTION,
  ...ROUTER_MASTER,
  ...ROUTER_RESOURCE,
  ...ROUTER_CV,
]
