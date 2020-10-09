export const findMember = (members=[], memberId) => {
  members.find(member => member.id === memberId)
}

export const findItem = (items=[], itemId) => {
  items.find(item => item.id === itemId)
}

export const getItemsForMember = (items=[], memberId) => (
  (!memberId) ? items : items.filter(item => item.memberId == memberId)
)
