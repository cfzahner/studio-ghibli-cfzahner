import THead from './THead'
import TBody from './TBody'

// export default to allow props to go into table and access thead and tbody by using dot notaion.
export default (props) =>
`
<table><class="table"/>
${THead(props.headers[props.activeStuff])}
${TBody(props.stuff, props.dataKeys[props.activeStuff])}
</table>
`
