const { faFolderPlus } = require("@fortawesome/free-solid-svg-icons")

const findMember = (members=[], memberId) => {
  members.find(member => member.id == memberId)
}

const findItem = (items=[], itemId) => {
  items.find(item => item.id == itemId)
}

const getItemsForMember = (items=[], memberId) => (
  (!memberId) ? items : items.filter(item => item.memberId == memberId)
)

export default {
  findItem,
  findMember,
  getItemsForMember
}