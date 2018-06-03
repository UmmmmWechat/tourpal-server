module.exports = {
    WAITING: 'WAITING',
    ONGOING: 'ONGOING',
    REJECTED: 'REJECTED',
    CANCELED: 'CANCELED',
    FINISHED: 'FINISHED', // 只有通过 反馈触发 | 主动反馈 或者 ongoing超时系统自动反馈
    TIMEOUT: 'TIMEOUT', // waiting 过一段时间 
    ALL: 'ALL'
}