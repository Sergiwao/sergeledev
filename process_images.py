import os
import shutil
from PIL import Image, ImageDraw, ImageFilter

def make_mac_mockup(input_path, output_path, bg_color=(247, 244, 235), border_color=(26, 26, 26)):
    """Creates a sleek macOS window mockup around a screenshot with neo-brutalist styling."""
    with Image.open(input_path) as orig:
        img = orig.convert("RGBA")
        w, h = img.size
        
        # Scale if very large for performance & crispness
        target_w = min(w, 1400)
        scale = target_w / w
        target_h = int(h * scale)
        img_resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Dimensions
        title_bar_h = 44
        margin = 32
        border_width = 3
        
        canvas_w = target_w + (margin * 2) + (border_width * 2)
        canvas_h = target_h + title_bar_h + (margin * 2) + (border_width * 2)
        
        # Canvas
        canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(canvas)
        
        # Shadow (Neo-brutalist hard shadow)
        shadow_offset = 8
        window_x = margin
        window_y = margin
        window_w = target_w + (border_width * 2)
        window_h = target_h + title_bar_h + (border_width * 2)
        
        # Draw hard shadow
        draw.rounded_rectangle(
            [window_x + shadow_offset, window_y + shadow_offset, 
             window_x + window_w + shadow_offset, window_y + window_h + shadow_offset],
            radius=14,
            fill=(26, 26, 26, 255)
        )
        
        # Window container background
        draw.rounded_rectangle(
            [window_x, window_y, window_x + window_w, window_y + window_h],
            radius=14,
            fill=(255, 255, 255, 255),
            outline=border_color,
            width=border_width
        )
        
        # Title bar background (clean light grey / subtle surface)
        # We can draw the title bar with rounded top corners
        draw.rounded_rectangle(
            [window_x + border_width, window_y + border_width, 
             window_x + window_w - border_width, window_y + title_bar_h + border_width],
            radius=12,
            fill=(243, 244, 246, 255)
        )
        # Flatten bottom of title bar
        draw.rectangle(
            [window_x + border_width, window_y + title_bar_h, 
             window_x + window_w - border_width, window_y + title_bar_h + border_width],
            fill=(243, 244, 246, 255)
        )
        # Separator line under title bar
        draw.line(
            [(window_x, window_y + title_bar_h + border_width), 
             (window_x + window_w, window_y + title_bar_h + border_width)],
            fill=border_color,
            width=2
        )
        
        # macOS Traffic Lights (Close, Minimize, Expand)
        dot_radius = 6
        dot_y = window_y + (title_bar_h // 2) + 1
        dot_start_x = window_x + 22
        
        # Red (#FF5F56)
        draw.ellipse([dot_start_x - dot_radius, dot_y - dot_radius, 
                      dot_start_x + dot_radius, dot_y + dot_radius], 
                     fill=(255, 95, 86, 255), outline=(224, 68, 62, 255), width=1)
        # Yellow (#FFBD2E)
        draw.ellipse([dot_start_x + 20 - dot_radius, dot_y - dot_radius, 
                      dot_start_x + 20 + dot_radius, dot_y + dot_radius], 
                     fill=(255, 189, 46, 255), outline=(222, 161, 35, 255), width=1)
        # Green (#27C93F)
        draw.ellipse([dot_start_x + 40 - dot_radius, dot_y - dot_radius, 
                      dot_start_x + 40 + dot_radius, dot_y + dot_radius], 
                     fill=(39, 201, 63, 255), outline=(26, 171, 41, 255), width=1)
        
        # Fake URL / Address pill in center of title bar
        pill_w = min(400, target_w // 2)
        pill_x = window_x + (window_w - pill_w) // 2
        pill_y1 = window_y + 9
        pill_y2 = window_y + title_bar_h - 9
        draw.rounded_rectangle([pill_x, pill_y1, pill_x + pill_w, pill_y2], radius=6, 
                               fill=(255, 255, 255, 255), outline=(209, 213, 219, 255), width=1)
        
        # Paste the content screenshot
        content_x = window_x + border_width
        content_y = window_y + title_bar_h + border_width + 1
        canvas.paste(img_resized, (content_x, content_y))
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        canvas.save(output_path, "PNG")
        print(f"Mockup generated: {output_path}")

def clean_mobile_frame(input_path, output_path):
    """Creates a polished mobile frame card with clean background for vertical app captures."""
    with Image.open(input_path) as orig:
        img = orig.convert("RGBA")
        w, h = img.size
        
        # Target scale
        target_w = min(w, 420)
        scale = target_w / w
        target_h = int(h * scale)
        img_resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        margin = 24
        border_width = 3
        shadow_offset = 6
        
        frame_w = target_w + (border_width * 2)
        frame_h = target_h + (border_width * 2)
        
        canvas_w = frame_w + (margin * 2) + shadow_offset
        canvas_h = frame_h + (margin * 2) + shadow_offset
        
        canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(canvas)
        
        # Shadow
        draw.rounded_rectangle(
            [margin + shadow_offset, margin + shadow_offset, 
             margin + frame_w + shadow_offset, margin + frame_h + shadow_offset],
            radius=20,
            fill=(26, 26, 26, 255)
        )
        
        # Frame
        draw.rounded_rectangle(
            [margin, margin, margin + frame_w, margin + frame_h],
            radius=20,
            fill=(255, 255, 255, 255),
            outline=(26, 26, 26, 255),
            width=border_width
        )
        
        # Paste screenshot
        canvas.paste(img_resized, (margin + border_width, margin + border_width))
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        canvas.save(output_path, "PNG")
        print(f"Mobile frame generated: {output_path}")

def main():
    ladias_dir = r"c:\Users\serge\OneDrive\Images\Serge le dev\Pictures\Ladias"
    audify_dir = r"c:\Users\serge\OneDrive\Images\Serge le dev\Pictures\Audify"
    undercover_dir = r"c:\Users\serge\OneDrive\Images\Serge le dev\Pictures\Undercover"
    
    os.makedirs(audify_dir, exist_ok=True)
    os.makedirs(undercover_dir, exist_ok=True)
    
    # 1. Mac mockups for Ladias 4 & 5
    make_mac_mockup(os.path.join(ladias_dir, "ladias 4.jpeg"), os.path.join(ladias_dir, "ladias_4_mac_mockup.png"))
    make_mac_mockup(os.path.join(ladias_dir, "ladias 5.jpeg"), os.path.join(ladias_dir, "ladias_5_mac_mockup.png"))
    
    # 2. Cleaned mobile frames for Ladias 1, 2, 3
    clean_mobile_frame(os.path.join(ladias_dir, "ladias 1.jpeg"), os.path.join(ladias_dir, "ladias_1_clean.png"))
    clean_mobile_frame(os.path.join(ladias_dir, "ladias 2.jpeg"), os.path.join(ladias_dir, "ladias_2_clean.png"))
    clean_mobile_frame(os.path.join(ladias_dir, "ladias 3.jpeg"), os.path.join(ladias_dir, "ladias_3_clean.png"))
    
    # 3. Extra Ladias Screenshots from recent work
    screen_facture = r"c:\Users\serge\OneDrive\Images\Screenshots\Capture d'écran 2026-10-11 190125.png"
    screen_prestation = r"c:\Users\serge\OneDrive\Images\Screenshots\Capture d'écran 2026-10-11 190210.png"
    if os.path.exists(screen_facture):
        make_mac_mockup(screen_facture, os.path.join(ladias_dir, "ladias_facture_mockup.png"))
    if os.path.exists(screen_prestation):
        make_mac_mockup(screen_prestation, os.path.join(ladias_dir, "ladias_prestation_mockup.png"))
        
    # 4. Audify visuals
    audify_src = r"C:\Users\serge\.gemini\antigravity\brain\ca5aa482-6c25-4e47-ab03-17fca2588494\audify_dashboard_flat_result_1789045978008.png"
    audify_pricing = r"c:\Users\serge\OneDrive\Images\Screenshots\Capture d'écran 2026-09-29 131940.png"
    if os.path.exists(audify_src):
        shutil.copy(audify_src, os.path.join(audify_dir, "audify_dashboard.png"))
        print("Copied audify_dashboard.png")
    if os.path.exists(audify_pricing):
        make_mac_mockup(audify_pricing, os.path.join(audify_dir, "audify_pricing_mockup.png"))
        
    # 5. Undercover visuals
    uc_home = r"C:\Users\serge\.gemini\antigravity\brain\f1a9119e-9fbe-45a3-95e5-18fa488eabf8\clean_home_screen_1788961568939.png"
    uc_reveal = r"C:\Users\serge\.gemini\antigravity\brain\f1a9119e-9fbe-45a3-95e5-18fa488eabf8\undercover_card_reveal_1789043395311.png"
    uc_winner = r"C:\Users\serge\.gemini\antigravity\brain\f1a9119e-9fbe-45a3-95e5-18fa488eabf8\winner_result_screen_1788775314515.png"
    if os.path.exists(uc_home):
        shutil.copy(uc_home, os.path.join(undercover_dir, "undercover_home.png"))
        print("Copied undercover_home.png")
    if os.path.exists(uc_reveal):
        shutil.copy(uc_reveal, os.path.join(undercover_dir, "undercover_reveal.png"))
        print("Copied undercover_reveal.png")
    if os.path.exists(uc_winner):
        shutil.copy(uc_winner, os.path.join(undercover_dir, "undercover_winner.png"))
        print("Copied undercover_winner.png")

if __name__ == "__main__":
    main()
