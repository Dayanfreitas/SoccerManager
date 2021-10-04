class CreateEntreprises < ActiveRecord::Migration[6.1]
  def change
    create_table :entreprises do |t|
      t.string :name

      t.timestamps
    end
  end
end
