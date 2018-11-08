class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :display_name
      t.string :email_address
      t.string :phone
      t.string :title
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
