export const findMember = (members=[], memberId) => {
  members.find(member => member.id === memberId)
}

export const findItem = (items=[], itemId) => {
  items.find(item => item.id === itemId)
}

export const getItemsForMember = (items=[], memberId) => (
  // eslint-disable-next-line
  (!memberId) ? items : items.filter(item => item.member_id == memberId)
)
