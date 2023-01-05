class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end
    
    def show 
        appointment = Appointment.find_by!(id: params[:id])
        render json: appointment   
    end 

    def create 
        appointment = Appointment.create(client_id: , artist_id: , tattoo_id: , apt_time: , apt_date: )
        render json: appointment
    end

    def update 
        appointment = Appointment.find_by!(id: params[:id])
        appointment.update!(client_id: , artist_id: , tattoo_id: , apt_time: , apt_date: )
        render json: appointment
    end 

    def destroy 
        appointment = Appointment.find_by!(id: params[:id])
        appointment.destroy!
    end 

end
