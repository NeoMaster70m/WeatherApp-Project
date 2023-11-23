import './App.css'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from './store/actions'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import { Typography, Paper, InputBase, IconButton, Grid } from '@mui/material'
import Lottie from 'lottie-react'
import logoWeather from './components/logo-weather.json'
import { Search } from '@mui/icons-material'

const App = props => {
	const [city, setCity] = useState('')
	const [invalidCity, setInvalidCity] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		if (city.trim() === '') {
			setInvalidCity(true)
			return
		}

		setInvalidCity(false)
		props.fetchWeather(city)
	}

	return (
		<div className='App'>
			<Grid container justifyContent='center' alignItems='center'>
				<Grid item height={150} width={150}>
					<Lottie animationData={logoWeather} />
				</Grid>
				<Grid item>
					<Typography variant='h2' gutterBottom>
						WeatherApp
					</Typography>
				</Grid>
			</Grid>

			<Grid container justifyContent='center' sx={{ pt: '20px' }}>
				<form onSubmit={handleSubmit}>
					<Paper
						component='div'
						sx={{
							p: '2px 4px',
							display: 'flex',
							alignItems: 'center',
							width: 300,
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder='Enter a City'
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						<IconButton type='submit' sx={{ p: '10px' }}>
							<Search />
						</IconButton>
					</Paper>
				</form>
			</Grid>

			<div>
				{}
				{invalidCity && <p>Please enter a city</p>}
				{}
				{props.loading ? (
					<p>Loading...</p>
				) : props.error ? (
					<p>Please enter a valid city, {props.error}</p>
				) : (
					props.weatherData && <WeatherCard data={props.weatherData} />
				)}
			</div>

			<Footer />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		weatherData: state.weatherData,
		error: state.error,
	}
}

const mapDispatchToProps = {
	fetchWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
