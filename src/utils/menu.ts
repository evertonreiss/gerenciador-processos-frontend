import { EssentialLinkProps } from 'components/MenuItem.vue';
import routes from '../router/routes'
import { computed } from 'vue';


const menu = computed(() => routes
  .filter(e => e.meta?.menu)
  .map(e => {
    const menu: any = e.meta?.menu
    return { link: e.path, name: e.name, icon: menu.icon, title: menu.title, hideOnDashboard: menu.hideOnDashboard } as EssentialLinkProps
  }))

const menuDashboard = computed(() => menu.value.filter(e => !e.hideOnDashboard))

export { menu, menuDashboard }
