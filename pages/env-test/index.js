export default function EnvTest({middlewareEnv}) {
    return (
        <h1>Environment is {middlewareEnv}</h1>    
    )
}

export const getServerSideProps = ({ query }) => ({
    props: query,
})
  