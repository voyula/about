import Link from "next/link";
import Header from "../components/header";
import "isomorphic-fetch";

export default class Index extends React.Component {
  static async getInitialProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const agencies = await response.json()
    return { agencies: agencies }
  }
  render() {
    const agencies = this.props.agencies
    return (
      <main>
        <Header />
        {(agencies && agencies.length > 0) ? 
          <ul>
            {agencies.map(agency => <li key="{agency.id}"><h3>{agency.title}</h3></li>)}
          </ul> : <p><strong>Have nothing!!</strong></p>}
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<section>
		  <Link href="/contact">
			<a>Contact</a>
		  </Link>
		</section>
	  </main>
	)
  }
}
