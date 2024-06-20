import type { App } from 'vue'

import VcToast from './alert/vc-toast.vue'
import VcNotify from './alert/vc-notify.vue'
import VcAlert from './alert/vc-alert.vue'

import VcAccount from './vc-account/vc-account.vue'

import VcSideBarLeft from './layout/vc-sidebar-left.vue'
import VcMenu from './layout/vc-menu.vue'
import VcRow from './layout/vc-row.vue'
import VcCol from './layout/vc-col.vue'

import VcConfirm from './dialog/vc-confirm.vue'
import VcModal from './dialog/vc-modal.vue'

import VcCard from './card/vc-card.vue'
import VcCardTitle from './card/vc-card-title.vue'
import VcCardContent from './card/vc-card-content.vue'
import VcCardAction from './card/vc-card-action.vue'

import VcForm from './form/vc-form.vue'
import VcButton from './form/vc-button.vue'
import VcInput from './form/vc-input.vue'
import VcLabel from './form/vc-label.vue'
import VcInputGroup from './form/vc-input-group.vue'
import VcInputGroupCustom from './form/vc-input-group-custom.vue'
import VcCheckbox from './form/vc-checkbox.vue'
import VcTextarea from './form/vc-textarea.vue'
import VcInputDate from './form/vc-input-date.vue'
import VcIcon from './form/vc-icon.vue'
import VcTreeview from './form/vc-treeview.vue'
import VcInputIcon from './form/vc-input-icon.vue'
import VcRadio from './form/vc-radio.vue'
import VcRadioGroup from './form/vc-radio-group.vue'

import VcSelect from './form/vc-select.vue'
import VcSelectCustom from './form/vc-select-custom.vue'

import VcTable from './vc-table/vc-table.vue'

import VcTabs from './tab/vc-tabs.vue'
import VcTabPanel from './tab/vc-tab-panel.vue'

import VcChart from './vc-chart/vc-chart.vue'
import VcImport from "@/components/dialog/vc-import.vue";

const requireComponent = {
  VcAccount,
  VcAlert,
  VcNotify,

  VcButton,
  VcConfirm,
  VcCheckbox,
  VcInputGroup,
  VcInputGroupCustom,
  VcInputDate,
  VcCard,
  VcCardTitle,
  VcCardContent,
  VcCardAction,
  VcTable,
  VcModal,
  VcSelect,
  VcSelectCustom,
  VcTextarea,
  VcIcon,
  VcRow,
  VcCol,
  VcForm,
  VcInput,
  VcInputIcon,
  VcRadio,
  VcRadioGroup,
  VcChart,
  VcLabel,
  VcMenu,
  VcSideBarLeft,
  VcTabs,
  VcTabPanel,
  VcTreeview,
  VcToast,
  VcImport
}

const register = (app: App<Element>): void => {
  Object.entries(requireComponent).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default {
  register,
}
